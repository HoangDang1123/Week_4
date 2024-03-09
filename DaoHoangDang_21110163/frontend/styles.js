import { StyleSheet } from 'react-native';

export const Colors = {
  primary100: '#f9beda',
  primary500: '#c30b64',
  primary800: '#610440',
  error100: '#fcdcbf',
  error500: '#f37c13',
};

export const unSelectedCategoryStyles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 20,
    color: 'gray'
  }
});

export const selectedCategoryStyles = StyleSheet.create({
   text: {
     fontWeight: 'bold',
     marginLeft: 10,
     fontSize: 20,
     borderBottomWidth: 4,
   }
});

export const grayBackgroundStyles = StyleSheet.create({
  button: {
    marginLeft: 10,
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
    alignItems: 'center',
    backgroundColor: '#A6A6A6',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    marginHorizontal: 4,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});

export const blueBackgroundStyles = StyleSheet.create({
  button: {
    marginLeft: 10,
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
    alignItems: 'center',
    backgroundColor: '#38A59F',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    marginHorizontal: 4,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});