import { StyleSheet } from 'react-native';

export const categoriesStyles = StyleSheet.create({
  view: {
    marginTop: 120,
    marginLeft: 10,
    marginRight: 10,
    justify: 'center',
    flexDirection: 'row'
  }
});

export const acquisitionStyles = StyleSheet.create({
  view: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justify: 'center',
    flexDirection: 'row'
  }
});

export const unSelectedCategoryStyles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 20,
    borderBottomWidth: 4,
    color: 'gray',
    borderBottomColor: 'gray'
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

export const scrollViewStyles = StyleSheet.create({
  scrollview: {
    paddingHorizontal: 5
  }
});