import { Dimensions, PanResponder, View } from 'react-native';
import { styles } from './styles';
import ButtonCustom from '../../components/ButtonCustom';
import {
  EntypoIcon,
  FontAwesome6Icon,
  Ionicon,
  MaterialCommunityIcon,
} from '../../components/VectorIcon';
import DisplayOutput from '../../components/DisplayOutput';
import { useCallback, useRef, useState } from 'react';
import { Constants } from '../../common/Constant';
import { performCalculation } from '../../common/commons';
import Decimal from 'decimal.js';

type Operation = 'plus' | 'minus' | 'multi' | 'divide' | 'percent';

const { width } = Dimensions.get('screen');

const CalculateScreen = () => {
  const [focusOperation, setFocusOperation] = useState<Operation | undefined>();
  const [output, setOutput] = useState('0')

  const [firstNumber, setFirstNumber] = useState('0');
  const [lastNumber, setLastNumber] = useState('0')
  const [operation, setOperation] = useState<Operation | undefined>();

  const onWipe = useCallback(() => {
    setOutput(prev =>
      prev !== '0' ? (prev.length > 1 ? prev.slice(0, -1) : '0') : '0',
    );
  }, [output])

  const onNumberBtnPress = useCallback((number: string) => {
    if (output.length <= 8) {
      setOutput(prev => prev === '0' ? number : prev + number)
      setLastNumber(prev => prev === '0' ? number : prev + number)
    }
    if (focusOperation) {
      calculate();
      setOutput(number)
      setLastNumber(number)
    }

    setFocusOperation(undefined)
  }, [output, focusOperation]);

  const onClearBtnPress = useCallback(() => {
    if (output === '0') {
      setLastNumber('0');
      setOperation(undefined)
      setFocusOperation(undefined)
    }
    setOutput('0');
    setFirstNumber('0')
  }, [output])

  const calculate = useCallback(() => {
    try {
      let result = parseInt(output)

      if (focusOperation) {
        setFirstNumber(output)
      } else if (firstNumber !== '0' || lastNumber !== '0' && operation) {
        result = performCalculation(firstNumber, lastNumber, operation)
        setOutput(result.toString());
        setFirstNumber(result.toString())
      }
    } catch (error) {
      setOutput("Lỗi")
    }
  }, [output, firstNumber, lastNumber, operation, focusOperation])

  const onOperationBtnPress = useCallback((operations: Operation) => {
    if (operations === 'percent') {
      setOutput(prev => `${parseFloat(prev) / 100}`)
    } else {
      setFocusOperation(operations)
      setOperation(operations)
      calculate()
    }
  }, [focusOperation, operation, output]);

  const onToggleSign = useCallback(() => {
    setOutput(prev =>
      prev.startsWith('-') ? prev.slice(1) : `-${prev}`,
    );
    setLastNumber(prev =>
      prev.startsWith('-') ? prev.slice(1) : `-${prev}`,
    );
  }, [])

  const onDotBtnPress = useCallback(() => {
    if (focusOperation) {
      setFirstNumber(output);
      setOutput('0.');
      setLastNumber('0.');
      setFocusOperation(undefined);
    } else if (!output.includes('.')) {
      setOutput(prev => prev + '.');
      setLastNumber(prev => prev + '.');
    }
  }, [focusOperation, output])

  return (
    <View style={styles.container}>
      <DisplayOutput
        swipe={onWipe}
        text={output}
      />

      <View style={styles.wrapperBtn}>
        <ButtonCustom
          label={output === '0' ? 'AC' : 'C'}
          onPress={onClearBtnPress}
          textStyles={{ fontSize: 40, fontWeight: '400' }}
        />
        <ButtonCustom
          icon={
            <MaterialCommunityIcon
              name="plus-minus-variant"
              size={40}
              color={Constants.white}
            />
          }
          onPress={() => onToggleSign()}
        />
        <ButtonCustom label="%" onPress={() => onOperationBtnPress('percent')} />
        <ButtonCustom
          icon={
            <FontAwesome6Icon
              name="divide"
              size={35}
              color={focusOperation === 'divide' ? Constants.orange : Constants.white}
            />
          }
          onPress={() => onOperationBtnPress('divide')}
          btnOperation={true}
          operation={focusOperation === 'divide'}
        />
      </View>
      <View style={styles.wrapperBtn}>
        <ButtonCustom label="7" onPress={() => onNumberBtnPress('7')} />
        <ButtonCustom label="8" onPress={() => onNumberBtnPress('8')} />
        <ButtonCustom label="9" onPress={() => onNumberBtnPress('9')} />
        <ButtonCustom
          icon={
            <Ionicon
              name="close"
              size={40}
              color={focusOperation === 'multi' ? Constants.orange : Constants.white}
            />
          }
          onPress={() => onOperationBtnPress('multi')}
          btnOperation={true}
          operation={focusOperation === 'multi'}
        />
      </View>
      <View style={styles.wrapperBtn}>
        <ButtonCustom label="4" onPress={() => onNumberBtnPress('4')} />
        <ButtonCustom label="5" onPress={() => onNumberBtnPress('5')} />
        <ButtonCustom label="6" onPress={() => onNumberBtnPress('6')} />
        <ButtonCustom
          icon={
            <EntypoIcon
              name="minus"
              size={40}
              color={focusOperation === 'minus' ? Constants.orange : Constants.white}
            />
          }
          onPress={() => onOperationBtnPress('minus')}
          btnOperation={true}
          operation={focusOperation === 'minus'}
        />
      </View>
      <View style={styles.wrapperBtn}>
        <ButtonCustom label="1" onPress={() => onNumberBtnPress('1')} />
        <ButtonCustom label="2" onPress={() => onNumberBtnPress('2')} />
        <ButtonCustom label="3" onPress={() => onNumberBtnPress('3')} />
        <ButtonCustom
          icon={
            <EntypoIcon
              name="plus"
              size={45}
              color={focusOperation === 'plus' ? Constants.orange : Constants.white}
            />
          }
          onPress={() => onOperationBtnPress('plus')}
          btnOperation={true}
          operation={focusOperation === 'plus'}
        />
      </View>
      <View style={styles.wrapperBtn}>
        <ButtonCustom
          label="0"
          onPress={() => onNumberBtnPress('0')}
          containerStyle={{
            width: (width / 4) * 2 - 17,
            alignItems: 'flex-start',
            paddingLeft: 30,
          }}
        />
        <ButtonCustom label="," onPress={() => onDotBtnPress()} />
        <ButtonCustom
          icon={
            <FontAwesome6Icon
              name={'equals'}
              size={35}
              color={Constants.white}
            />
          }
          onPress={() => calculate()}
          btnOperation={true}
        />
      </View>
    </View>
  );
};

export default CalculateScreen;
