import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { material } from 'react-native-typography';
import MaterialDialog from '../../../node_modules/react-native-material-dialog/src/MaterialDialog';
import colors from '../../../node_modules/react-native-material-dialog/src/colors';

export class CustomSinglePickerDialog extends Component {
  constructor(props) {
    super(props);
  }

  onPressItem(value) {
      
    const { items} = this.props;
    const selectedIndex = items.findIndex(item => item.value === value);
    this.props._onPressItem(selectedIndex);
  }

  keyExtractor = item => String(item.value);

  renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => this.onPressItem(item.value)}>
      <View style={styles.rowContainer}>
        <Text style={material.subheading}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <MaterialDialog
        title={this.props.title}
        titleColor={this.props.titleColor}
        colorAccent={this.props.colorAccent}
        visible={this.props.visible}
        okLabel={this.props.okLabel}
        scrolled={this.props.scrolled}
        onOk= {null}
        cancelLabel={this.props.cancelLabel}
        onCancel={this.props.onCancel}
      >
        <FlatList
          data={this.props.items}
          extraData={this.state}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          flexGrow = {0}
          height =  {this.props.heightList}
          
        />
      </MaterialDialog>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 16,
  },
});

CustomSinglePickerDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItem: PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  }),
  title: PropTypes.string,
  titleColor: PropTypes.string,
  colorAccent: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  cancelLabel: PropTypes.string,
  okLabel: PropTypes.string,
  scrolled: PropTypes.bool,
  _onPressItemCountry: PropTypes.func,
};

CustomSinglePickerDialog.defaultProps = {
  selectedItem: undefined,
  title: undefined,
  titleColor: undefined,
  colorAccent: colors.androidColorAccent,
  cancelLabel: undefined,
  okLabel: undefined,
  scrolled: false,
};