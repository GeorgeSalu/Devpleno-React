import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 16
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18
  },
  wrapperItemPice: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16
  },
  itemPrice: { textAlign: 'right', color: '#24C6DC', fontWeight: 'bold' },
  wrapperInfo: { flex: 1 }
})

export default styles