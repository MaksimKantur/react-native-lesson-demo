import { Dimensions, StyleSheet, Text, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const boxWidth = screenWidth / 3;

const BlockLayout: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.box, styles.boxLightBlue]} />
        <View style={[styles.box, styles.boxBlue]} />
        <View style={[styles.box, styles.boxBlue]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.box, styles.boxGreen]} />
        <View style={[styles.box, styles.boxGreen]} />
        <View style={[styles.box, styles.boxGreen]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.box, styles.boxGreen]} />
        <View style={[styles.box, styles.boxGreen]} />
        <View style={[styles.box, styles.boxGreen]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.box, styles.boxDarkGreen]} />
        <View style={[styles.box, styles.boxLightGreen]} />
        <View style={[styles.box, styles.boxDarkGreen]} />
      </View>
      <View style={[styles.row, styles.splitBox]}>
        <View style={[styles.boxHalf, styles.boxBlue]} />
        <View style={[styles.boxHalf, styles.boxLightBlue]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  box: {
    width: boxWidth,
    flex: 1,
  },
  splitBox: {
    flexDirection: 'column',
  },
  boxHalf: {
    flex: 1,
  },
  boxBlue: {
    backgroundColor: '#0093C4',
  },
  boxGreen: {
    backgroundColor: '#7CB342',
  },
  boxLightBlue: {
    backgroundColor: '#4FC3F7'
  },
  boxDarkGreen: {
    backgroundColor: '#4B830D',
  },
  boxLightGreen: {
    backgroundColor: '#AEE571',
  },
});

export default BlockLayout;