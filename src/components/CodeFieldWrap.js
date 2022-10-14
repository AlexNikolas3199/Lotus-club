import { StyleSheet, Text } from 'react-native'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'

const CodeFieldWrap = ({ value, setValue }) => {
  const CELL_COUNT = 4
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue })
  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType='number-pad'
      textContentType='oneTimeCode'
      renderCell={({ index, symbol, isFocused }) => (
        <Text key={index} style={[styles.cell, isFocused && styles.focusCell]} onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  )
}

const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 15 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 12,
    marginHorizontal: 7.5,
    borderColor: 'gray',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
})
export default CodeFieldWrap
