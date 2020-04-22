import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, Easing, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ColorCustom } from '../../../utils/color'

class SingleDropDown extends Component {
  /**
   * @param {*} props 
   * data: [
   *  [
   *    {
   *      id: answers id (require),
          text: answerText (require),
          parentId,
          questionId: idQuestion (require),
          isTrue: selected (true/false) defaul: false
   *     }
   *  ]
   * ]
   * @param {*} context 
   */
  constructor(props, context) {
    super(props, context);

    var selectIndex = 0;
    let arrSelect = this.props.data[0];
    //  console.log('SingleDropDown ', arrSelect);

    for (let i = 0; i < arrSelect.length; i++) {
      if (arrSelect[i].isTrue) {
        selectIndex = i;
        break;
      }
    }

    this.state = {
      activityIndex: -1,
      selectIndex: [selectIndex],
      rotationAnims: props.data.map(() => new Animated.Value(0)),
      initText: '',
    };

    this.defaultConfig = {
      bgColor: 'grey',
      tintColor: '#333333',
      activityTintColor: "red",
      arrowImg: require('./img/dropdown_arrow.png'),
      checkImage: require('./img/menu_check.png')
    };
  }

  renderChcek(index, title) {
    var activityIndex = this.state.activityIndex;
    if (this.state.selectIndex[activityIndex] == index) {
      return (
        <View style={{
          flex: 1,
          paddingHorizontal: 10,
          flexDirection: 'row'
        }} >
          <View style={{ flex: 1 }} />
          <Text
            style={[
              styles.item_text_style,
              this.props.optionTextStyle,
              { color: this.props.activityTintColor ? this.props.activityTintColor : this.defaultConfig.activityTintColor, flex: 9 }
            ]} >
            {title}
          </Text>
        </View>
      );
    }
    return (
      <View style={{
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'row'
      }} >
        <View style={{ flex: 1 }} />
        <Text style={[
          styles.item_text_style,
          this.props.optionTextStyle,
          { color: this.props.tintColor ? this.props.tintColor : this.defaultConfig.tintColor, flex: 9 }
        ]} >{title}</Text>
      </View>
    );
  }

  renderActivityPanel() {
    if (this.state.activityIndex >= 0) {
      var currentTitles = this.props.data[this.state.activityIndex];
      var heightStyle = {};
      if (this.props.maxHeight && this.props.maxHeight < currentTitles.length * 44) {
        heightStyle.height = this.props.maxHeight;
      }

      return (
        <ScrollView
          nestedScrollEnabled={true}
          style={styles.scrollStyle} >
          {
            currentTitles.map((title, index) =>
              <TouchableOpacity
                key={index}
                style={{ flex: 1, height: 44 }}
                onPress={this.itemOnPress.bind(this, index)} >
                {this.renderChcek(index, title.text)}
              </TouchableOpacity>
            )
          }
        </ScrollView>
      )

      // return (
      //   <View >
      //     {/* <TouchableOpacity
      //       onPress={() => this.openOrClosePanel(this.state.activityIndex)} activeOpacity={1}
      //       style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
      //       <View style={{ opacity: 0.4, backgroundColor: 'red', flex: 1 }} />
      //     </TouchableOpacity> */}

      //     <ScrollView
      //       nestedScrollEnabled={true}
      //       style={styles.scrollStyle} >
      //       {
      //         currentTitles.map((title, index) =>
      //           <TouchableOpacity
      //             key={index}
      //             style={{ flex: 1, height: 44 }}
      //             onPress={this.itemOnPress.bind(this, index)} >
      //             {this.renderChcek(index, title)}
      //           </TouchableOpacity>
      //         )
      //       }
      //     </ScrollView>
      //   </View>
      // );
    }
  }

  openOrClosePanel(index) {
    this.props.bannerAction ? this.props.bannerAction() : null;
    if (this.state.activityIndex == index) {
      this.closePanel(index);
      this.setState({
        activityIndex: -1,
      });
    } else {
      if (this.state.activityIndex > -1) {
        this.closePanel(this.state.activityIndex);
      }
      this.openPanel(index);
      this.setState({
        activityIndex: index,
      });
    }
  }

  openPanel(index) {
    Animated.timing(
      this.state.rotationAnims[index],
      {
        toValue: 0.5,
        duration: 300,
        easing: Easing.linear
      }
    ).start();
  }

  closePanel(index) {
    Animated.timing(
      this.state.rotationAnims[index],
      {
        toValue: 0,
        duration: 300,
        easing: Easing.linear
      }
    ).start();
  }

  itemOnPress(index) {
    if (this.state.activityIndex > -1) {
      var selectIndex = this.state.selectIndex;
      selectIndex[this.state.activityIndex] = index;
      this.setState({
        selectIndex: selectIndex
      });
      if (this.props.handler && this.props.data[0][index]) {
        this.props.handler([this.props.data[0][index]]);
      }
    }
    this.openOrClosePanel(this.state.activityIndex);
  }

  renderDropDownArrow(index) {
    var icon = this.props.arrowImg ? this.props.arrowImg : this.defaultConfig.arrowImg;
    return (
      <View style={{ flex: 1, paddingLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Animated.Image
          source={icon}
          style={{
            width: 15,
            height: 15,
            resizeMode: 'contain',
            tintColor: ColorCustom.MAIN_COLOR_BLUE,
            transform: [{
              rotateZ: this.state.rotationAnims[index].interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
              })
            }]
          }} />
      </View>
    );
  }

  render() {
    // console.log('this.props.data ', this.props.data[0]);
    //console.log('this.state.selectIndex ', this.state.selectIndex);

    return (
      <View style={{
        borderRadius: 25,
        borderColor: ColorCustom.MAIN_COLOR_BLUE_OPACITY,
        borderWidth: 1,
        marginTop: 10,
      }} >
        {
          this.props.data.map((rows, index) =>
            <TouchableOpacity
              activeOpacity={1}
              onPress={this.openOrClosePanel.bind(this, index)}
              key={index}
              style={{ paddingVertical: 10, }} >
              <View style={{ flexDirection: 'row', }} >
                {this.renderDropDownArrow(index)}

                <Text
                  style={[
                    styles.title_style,
                    this.props.titleStyle,
                    {
                      flex: 9,
                      textAlign: 'center',
                      color: (index === this.state.activityIndex) ?
                        (this.props.activityTintColor ? this.props.activityTintColor : this.defaultConfig.activityTintColor)
                        :
                        (this.props.tintColor ? this.props.tintColor : this.defaultConfig.tintColor)
                    }
                  ]} >
                  {rows[this.state.selectIndex[index]].text}
                </Text>

              </View>
            </TouchableOpacity>
          )
        }
        {this.renderActivityPanel()}
      </View>
    );
  }

}

SingleDropDown.propTypes = {
  bgColor: PropTypes.string,
  tintColor: PropTypes.string,
  activityTintColor: PropTypes.string,
  arrowImg: PropTypes.number,
  checkImage: PropTypes.number,
  data: PropTypes.array,
  bannerAction: PropTypes.func,
  optionTextStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  maxHeight: PropTypes.number
}

const styles = StyleSheet.create({
  title_style: {
    fontSize: 14
  },
  item_text_style: {
    color: '#333333',
    fontSize: 14
  },
  scrollStyle: {

    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    //backgroundColor: 'green'
  }
});

export default SingleDropDown;
