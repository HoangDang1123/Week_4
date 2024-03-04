import { Text, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';
import * as styles from '../styles';

import { MenuButton, NotificationButton, SearchButton } from "../components/HeaderButton";
import * as categories from "../components/CategoriesButton";
import * as acquisitions from "../components/AcquisitionButton";

function HomeScreen({navigation}) {
  const handleAcquisitionPress = () => {
    console.log("ok")
  }

  // Lấy kích thước màn hình
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={{flex: 1}}>
      <SafeAreaView>
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 248, height: 47, position: 'absolute', top: 50 }}
        />

        <SearchButton onPress={handleAcquisitionPress} />
        <NotificationButton onPress={handleAcquisitionPress} />
        <MenuButton onPress={() => navigation.openDrawer()} />
      </SafeAreaView>

      <SafeAreaView style={styles.categoriesStyles.view}>
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
      </SafeAreaView>

      <SafeAreaView style={styles.acquisitionStyles.view}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <acquisitions.FilterAcquisition onPress={handleAcquisitionPress} />
          <acquisitions.DistanceAcquisition onPress={handleAcquisitionPress} />
          <acquisitions.FreeAcquisition onPress={handleAcquisitionPress} />
          <acquisitions.BuyAcquisition onPress={handleAcquisitionPress} />
          <acquisitions.BorrowAcquisition onPress={handleAcquisitionPress} />
          <acquisitions.RentAcquisition onPress={handleAcquisitionPress} />
        </ScrollView>
      </SafeAreaView>

      <SafeAreaView style={{position: 'absolute', bottom: -15}}>
        <Image
          source={require('../assets/images/bottom_menu.png')}
          style={{ width: screenWidth}}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}
export default HomeScreen;