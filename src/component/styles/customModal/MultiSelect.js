import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  UIManager,
  ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';
import reject from 'lodash/reject';
import find from 'lodash/find';
import get from 'lodash/get';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ColorCustom } from '../../../utils/color'
import styles, { colorPack } from './styles';
import nodeTypes from './helpers/nodeTypes';
import { STR_NUMBER_MAX_ANSWER } from "../../../utils/constantstring";

// set UIManager LayoutAnimationEnabledExperimental
if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const defaultSearchIcon = (
  <Icon
    name="magnify"
    size={20}
    style={{ marginRight: 10, color: ColorCustom.MAIN_COLOR_BLUE_OPACITY, }}
  />
);

export default class MultiSelect extends Component {
  static propTypes = {
    single: PropTypes.bool,
    selectedItems: PropTypes.array,
    items: PropTypes.array.isRequired,
    uniqueKey: PropTypes.string,
    tagBorderColor: PropTypes.string,
    tagTextColor: PropTypes.string,
    fontFamily: PropTypes.string,
    tagRemoveIconColor: PropTypes.string,
    onSelectedItemsChange: PropTypes.func.isRequired,
    selectedItemFontFamily: PropTypes.string,
    selectedItemTextColor: PropTypes.string,
    itemFontFamily: PropTypes.string,
    itemTextColor: PropTypes.string,
    itemFontSize: PropTypes.number,
    selectedItemIconColor: PropTypes.string,
    searchIcon: nodeTypes,
    searchInputPlaceholderText: PropTypes.string,
    searchInputStyle: PropTypes.object,
    selectText: PropTypes.string,
    styleDropdownMenu: ViewPropTypes.style,
    styleDropdownMenuSubsection: ViewPropTypes.style,
    styleInputGroup: ViewPropTypes.style,
    styleItemsContainer: ViewPropTypes.style,
    styleListContainer: ViewPropTypes.style,
    styleMainWrapper: ViewPropTypes.style,
    styleRowList: ViewPropTypes.style,
    styleSelectorContainer: ViewPropTypes.style,
    styleTextDropdown: Text.propTypes.style,
    styleTextDropdownSelected: Text.propTypes.style,
    altFontFamily: PropTypes.string,
    hideSubmitButton: PropTypes.bool,
    hideDropdown: PropTypes.bool,
    submitButtonColor: PropTypes.string,
    submitButtonText: PropTypes.string,
    textColor: PropTypes.string,
    fontSize: PropTypes.number,
    fixedHeight: PropTypes.bool,
    hideTags: PropTypes.bool,
    canAddItems: PropTypes.bool,
    onChangeInput: PropTypes.func,
    displayKey: PropTypes.string,
    textInputProps: PropTypes.object,
    flatListProps: PropTypes.object,
    filterMethod: PropTypes.string,
    onClearSelector: PropTypes.func,
    onToggleList: PropTypes.func,
    removeSelected: PropTypes.bool,
    limitNumber: PropTypes.number,
  };

  static defaultProps = {
    single: false,
    limitNumber: -1,
    selectedItems: [],
    uniqueKey: '_id',
    tagBorderColor: colorPack.primary,
    tagTextColor: colorPack.primary,
    fontFamily: '',
    tagRemoveIconColor: colorPack.danger,
    selectedItemFontFamily: '',
    selectedItemTextColor: colorPack.primary,
    searchIcon: defaultSearchIcon,
    itemFontFamily: '',
    itemTextColor: colorPack.textPrimary,
    itemFontSize: 16,
    selectedItemIconColor: colorPack.primary,
    searchInputPlaceholderText: '',
    searchInputStyle: { color: colorPack.textPrimary },
    textColor: colorPack.textPrimary,
    selectText: 'Select',
    altFontFamily: '',
    hideSubmitButton: false,
    submitButtonColor: '#CCC',
    submitButtonText: 'Ok',
    fontSize: 14,
    fixedHeight: false,
    hideTags: false,
    hideDropdown: false,
    onChangeInput: () => { },
    displayKey: 'name',
    canAddItems: false,
    onClearSelector: () => { },
    onToggleList: () => { },
    removeSelected: false
  };

  constructor(props) {
    super(props);
    let text = '';
    let arrSelect = [];
    const arr = this.props.items;
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i].isTrue) {
        arrSelect.push(arr[i])
        text += arr[i].text;
        if (i + 1 != arr.length)
          text += ', '
      }

    }
    this.state = {
      selector: false,
      searchTerm: text,
      arrItemSelect: arrSelect
    };
  }

  shouldComponentUpdate() {
    // console.log('Component Updating: ', nextProps.selectedItems);
    return true;
  }

  getSelectedItemsExt = optionalSelctedItems => (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}
    >
      {this._displaySelectedItems(optionalSelctedItems)}
    </View>
  );

  _onChangeInput = value => {
    const { onChangeInput } = this.props;
    if (onChangeInput) {
      onChangeInput(value);
    }
    this.setState({ searchTerm: value });
  };

  _getSelectLabel = () => {
    const { selectText, single, selectedItems, displayKey } = this.props;
    if (!selectedItems || selectedItems.length === 0) {
      return selectText;
    }
    if (single) {
      const item = selectedItems[0];
      const foundItem = this._findItem(item);
      return get(foundItem, displayKey) || selectText;
    }
    return `${selectText} (${selectedItems.length} selected)`;
  };

  _findItem = itemKey => {
    const { items, uniqueKey } = this.props;
    return find(items, singleItem => singleItem[uniqueKey] === itemKey) || {};
  };

  _displaySelectedItems = optionalSelctedItems => {
    const { uniqueKey, displayKey } = this.props;

    return optionalSelctedItems.map(singleSelectedItem => {
      const item = this._findItem(singleSelectedItem);
      if (!item[displayKey]) return null;
      return (
        <View
          style={[
            styles.selectedItem,
            {
              width: item[displayKey].length * 8 + 60,
              justifyContent: 'center',
              height: 40,
            }
          ]}
          key={item[uniqueKey]}
        >
          <Text
            style={[{ flex: 1, color: ColorCustom.GRAY, fontSize: 15 }]}
            numberOfLines={1}
          >
            {item[displayKey]}
          </Text>
        </View>
      );
    });
  };

  _removeItem = item => {
    const { uniqueKey, selectedItems, onSelectedItemsChange } = this.props;
    const newItems = reject(
      selectedItems,
      singleItem => item[uniqueKey] === singleItem
    );
    // broadcast new selected items state to parent component
    onSelectedItemsChange(newItems);
  };

  _removeAllItems = () => {
    const { onSelectedItemsChange } = this.props;
    // broadcast new selected items state to parent component
    onSelectedItemsChange([]);
  };

  _clearSelector = () => {
    this.setState({
      selector: false
    });
  };

  _clearSelectorCallback = () => {
    const { onClearSelector } = this.props;
    this._clearSelector();
    if (onClearSelector) {
      onClearSelector();
    }
  };

  _toggleSelector = () => {
    const { onToggleList } = this.props;
    if (!this.state.selector) {
      this.setState({
        searchTerm: ''
      })
    }
    this.setState({
      selector: !this.state.selector
    });
    if (onToggleList) {
      onToggleList();
    }
  };

  _clearSearchTerm = () => {
    if (this.state.arrItemSelect.length > 0) {
      let text = '';
      const arr = this.state.arrItemSelect;
      for (let i = 0; i < arr.length; ++i) {
        text += arr[i].text;
        if (i + 1 != arr.length)
          text += ', '
      }
      this.setState({
        searchTerm: text
      });
    }
    else
      this.setState({
        searchTerm: ''
      })
  };

  _submitSelection = () => {
    this._toggleSelector();
    // reset searchTerm
    this._clearSearchTerm();
    if (this.state.arrItemSelect.length == 0) return;
    let arr = [...this.state.arrItemSelect];
    let obj = []
    for (let i = 0; i < arr.length; ++i) {
      obj.push(arr[i].id);
    }

    obj = {
      selectedId: [...obj],
      parentId: arr[0].parentId
    }
    this.props.onSelectedItemsChange(obj);
    //  this.setState({ arrItemSelect: [] })
  };

  _itemSelected = item => {
    const { uniqueKey } = this.props;
    const { arrItemSelect } = this.state;
    return arrItemSelect.indexOf(item[uniqueKey]) !== -1;
  };

  _itemStyle = item => {
    const { arrItemSelect } = this.state;
    const check = arrItemSelect.filter(obj => obj.id == item.id);
    return {
      color: check.length > 0 ? ColorCustom.MAIN_COLOR_BLUE : ColorCustom.GRAY,
    };
  };

  selectItem = (itemClick) => {
    let arr = [];
    if (this.state.arrItemSelect.length == 0) {
      arr.push(itemClick);
    } else {
      let index = -1;
      for (let i = 0; i < this.state.arrItemSelect.length; ++i) {
        const item = this.state.arrItemSelect[i];
        if (item.id == itemClick.id) {
          index = i;
          break;
        }
      }

      if (index == -1) {
        arr = [...this.state.arrItemSelect];
        arr.push(itemClick);
      } else {
        arr = this.state.arrItemSelect.filter(item => item.id != itemClick.id);
      }
    }
    if (this.props.limitNumber >= arr.length) {
      this.setState({
        arrItemSelect: arr,
      })
    } else {
      alert(this.props.limitNumber + STR_NUMBER_MAX_ANSWER)
    }
  }

  _getRow = item => {
    const { displayKey, styleRowList } = this.props;

    return (
      <TouchableOpacity
        onPress={() => { this.selectItem(item) }}
        style={{ paddingLeft: 20, paddingRight: 20, marginVertical: 5 }}
      >
        <Text style={[{ fontSize: 16, paddingVertical: 3 }, this._itemStyle(item)]}>
          {item[displayKey]}
        </Text>
      </TouchableOpacity>
    );
  };

  _filterItems = searchTerm => {
    switch (this.props.filterMethod) {
      case 'full':
        return this._filterItemsFull(searchTerm);
      default:
        return this._filterItemsPartial(searchTerm);
    }
  };

  _filterItemsPartial = searchTerm => {
    const { items, displayKey } = this.props;
    const filteredItems = [];
    items.forEach(item => {
      const parts = searchTerm.trim().split(/[ \-:]+/);
      const regex = new RegExp(`(${parts.join('|')})`, 'ig');
      if (regex.test(get(item, displayKey))) {
        filteredItems.push(item);
      }
    });
    return filteredItems;
  };

  _filterItemsFull = searchTerm => {
    const { items, displayKey } = this.props;
    const filteredItems = [];
    items.forEach(item => {
      if (
        item[displayKey]
          .toLowerCase()
          .indexOf(searchTerm.trim().toLowerCase()) >= 0
      ) {
        filteredItems.push(item);
      }
    });
    return filteredItems;
  };

  _renderItems = () => {
    const {
      canAddItems,
      items,
      fontFamily,
      uniqueKey,
      removeSelected
    } = this.props;

    const selectedItems = this.state.arrItemSelect;
    const { searchTerm } = this.state;
    let component = null;
    // If searchTerm matches an item in the list, we should not add a new
    // element to the list.
    let searchTermMatch;
    let itemList;
    let addItemRow;
    let renderItems = searchTerm ? this._filterItems(searchTerm) : items;
    // Filtering already selected items
    if (removeSelected) {
      renderItems = renderItems.filter(
        item => !selectedItems.includes(item[uniqueKey])
      );
    }
    if (renderItems.length) {
      itemList = (
        <FlatList
          data={renderItems}
          extraData={selectedItems}
          keyExtractor={item => item[uniqueKey]}
          listKey={item => item[uniqueKey]}
          renderItem={rowData => this._getRow(rowData.item)}
          nestedScrollEnabled={true}
          maxHeight={150}
        />
      );
      searchTermMatch = renderItems.filter(item => item.name === searchTerm)
        .length;
    } else if (!canAddItems) {
      itemList = (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={[
              {
                flex: 1,
                marginTop: 20,
                textAlign: 'center',
                color: colorPack.danger
              },
              fontFamily ? { fontFamily } : {}
            ]}
          >
            No item to display.
          </Text>
        </View>
      );
    }

    component = (
      <View >
        {itemList}
      </View>
    );
    return component;
  };

  render() {
    const {
      searchInputStyle,
      submitButtonText,
      searchIcon
    } = this.props;
    const { searchTerm, selector } = this.state;

    return (
      <View style={{
        borderRadius: 25,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        borderWidth: 1,
        marginTop: 10,
        maxHeight: 300,
      }} >
        {selector ? (
          <View >
            <View style={styles.inputGroup}>
              {searchIcon}
              <TextInput
                autoFocus
                onChangeText={this._onChangeInput}
                onSubmitEditing={this._addItem}
                placeholderTextColor={ColorCustom.WHITE}
                // underlineColorAndroid="transparent"
                style={[{ flex: 1, color: ColorCustom.WHITE, height: 45, }]}
                value={searchTerm}
                multiline={false}
              />
            </View>
            <View>
              {this._renderItems()}

              <TouchableOpacity
                onPress={() => this._submitSelection()}
                style={styles.button}
              >
                <Text
                  style={styles.buttonText}
                >
                  {submitButtonText}
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        ) : (
            <View style={styles.dropdownView} >
              <TouchableWithoutFeedback
                style={{ flex: 1, }}
                onPress={this._toggleSelector}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                  <Icon
                    name={'magnify'}
                    style={styles.indicator}
                    size={25}
                  />
                  <Text
                    style={[{ flex: 1, color: ColorCustom.MAIN_COLOR_BLUE, alignSelf: 'center', }]}
                    numberOfLines={1}
                  >{searchTerm}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
      </View>
    );
  }
}
