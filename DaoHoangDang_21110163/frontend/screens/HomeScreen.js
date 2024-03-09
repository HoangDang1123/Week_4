import { StyleSheet, SafeAreaView, View, Image, ScrollView, Dimensions, StatusBar } from 'react-native';
import { MenuButton, NotificationButton, SearchButton } from "../components/HeaderButton";
import * as categories from "../components/CategoriesButton";
import * as acquisitions from "../components/AcquisitionButton";

const HomeScreen = ({navigation}) => {
  const handleAcquisitionPress = () => {
    console.log("ok")
  }

  // Lấy kích thước màn hình
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={homeScreenStyles}>
      <View style={headerStyle}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 180, height: 58}}
        />
        <View style={{flexDirection: 'row'}}>
          <SearchButton onPress={handleAcquisitionPress} />
          <NotificationButton onPress={handleAcquisitionPress} />
          <MenuButton onPress={() => navigation.openDrawer()} />
        </View>
      </View>

      <View style={categoriesStyles.view}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <categories.AllCategories onPress={handleAcquisitionPress} />
          <categories.ShirtCategory onPress={handleAcquisitionPress} />
          <categories.TshirtCategory onPress={handleAcquisitionPress} />
          <categories.JacketCategory onPress={handleAcquisitionPress} />
          <categories.BlouseCategory onPress={handleAcquisitionPress} />
          <categories.DressCategory onPress={handleAcquisitionPress} />
          <categories.ShortsCategory onPress={handleAcquisitionPress} />
          <categories.PantsCategory onPress={handleAcquisitionPress} />
          <categories.SkirtCategory onPress={handleAcquisitionPress} />
          <categories.SweaterCategory onPress={handleAcquisitionPress} />
          <categories.JeansCategory onPress={handleAcquisitionPress} />
        </ScrollView>
      </View>

      <View style={acquisitionStyles.view}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <acquisitions.FilterAcquisition onPress={handleAcquisitionPress} />
          <acquisitions.DistanceAcquisition onPress={handleAcquisitionPress} />
          <acquisitions.FreeAcquisition onPress={handleAcquisitionPress} />
          <acquisitions.BuyAcquisition onPress={handleAcquisitionPress} />
          <acquisitions.BorrowAcquisition onPress={handleAcquisitionPress} />
          <acquisitions.RentAcquisition onPress={handleAcquisitionPress} />
        </ScrollView>
      </View>

      <View style={{position: 'absolute', bottom: -15}}>
        <Image
          source={require('../assets/images/bottom_menu.png')}
          style={{ width: screenWidth}}
        />
      </View>
    </SafeAreaView>
  );
}

const homeScreenStyles = StyleSheet.create({
  flex: 1,
  backgroundColor: '#FFFFFF',
  marginTop: StatusBar.currentHeight
});

const headerStyle = StyleSheet.create({
  marginHorizontal: 20,
  marginVertical: 10,
  justifyContent: 'space-between',
  flexDirection: 'row'
})

const categoriesStyles = StyleSheet.create({
  view: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justify: 'center',
    flexDirection: 'row'
  }
});

const acquisitionStyles = StyleSheet.create({
  view: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justify: 'center',
    flexDirection: 'row'
  }
});
export default HomeScreen;