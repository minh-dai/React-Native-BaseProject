import React from "react";
import styled from "styled-components";
import {
    LayoutChangeEvent,
    PanResponder,
    PanResponderGestureState
  } from "react-native";
import {ColorCustom} from "../../utils/color";

type StateType = {
    barHeight: 300,
    deltaValue: 0,
    value: 1
};

const CIRCLE_DIAMETER = 20;

export default class Slider extends React.Component<{}, StateType> {
    min = 0;
    max = 0;
    initialValue = 0;
    prefixesStr = "";
    firstTime = true;
    
    state = {
        barHeight: null,
        deltaValue: 0,
        value: 0,
    };

    constructor(props, context) {
      super(props, context);
      this.min = props.min;
      this.max = props.max;
      this.initialValue = props.initialValue;
      this.prefixesStr = props.prefixesStr;

    }

     onBarLayout = (event: LayoutChangeEvent) => {
        const { height: barHeight } = event.nativeEvent.layout;
        this.setState({ barHeight });
    };

    panResponder = PanResponder.create({
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderMove: (_, gestureState) => this.onMove(gestureState),
        onPanResponderRelease: () => this.onEndMove(),
        onPanResponderTerminate: () => {}
    });

    onMove(gestureState: PanResponderGestureState) {
        const { barHeight } = this.state;
        const newDeltaValue = this.getValueFromBottomOffset(
          -gestureState.dy,
          barHeight,
          this.min,
          this.max
        );

       
        
    
        this.setState({
          deltaValue: newDeltaValue
        });
    }

     onEndMove() {
        const { value, deltaValue } = this.state;
        this.setState({ value: value + deltaValue, deltaValue: 0 });
      }

   capValueWithinRange = (value, range) => {
     if (this.firstTime)
     {
      this.setState({
        value: this.initialValue
      });
       this.firstTime = false
     }
        if (value < range[0]) {
          this.props.setValueCurrent(Math.floor(range[0]))
          return range[0];
        }
        if (value > range[1]) {
          this.props.setValueCurrent(Math.floor(range[1]))
          return range[1];
        }
        this.props.setValueCurrent(Math.floor(value))
        return value;
    };

    getValueFromBottomOffset = (
        offset,
        barHeight,
        rangeMin,
        rangeMax
      ) => {
        if (barHeight === null) return 0;
        return ((rangeMax - rangeMin) * offset) / barHeight;
      };
    
     getBottomOffsetFromValue = (
        value,
        rangeMin,
        rangeMax,
        barHeight
      ) => {
        if (barHeight === null) return 0;
        const valueOffset = value - rangeMin;
        const totalRange = rangeMax - rangeMin;
        const percentage = valueOffset / totalRange;
        return barHeight * percentage;
      };

      render() {
        console.disableYellowBox = true; 
        const { value, deltaValue, barHeight } = this.state;
    
        const cappedValue = this.capValueWithinRange(value + deltaValue, [
          this.min,
          this.max
        ]);
        const bottomOffset = this.getBottomOffsetFromValue(
          cappedValue,
          this.min,
          this.max,
          barHeight
        );
    
        return (
          <PageContainer>
            <Container>
              <BarContainer>
                <Bar onLayout={this.onBarLayout}>
                    <LineTop></LineTop>
                    <LineBottom></LineBottom>
                </Bar>
                <Circle
                  bottomOffset={bottomOffset}
                  {...this.panResponder.panHandlers}
                />
              </BarContainer>
              <Value bottomOffset={bottomOffset}>{Math.floor(cappedValue) + this.prefixesStr}</Value>
            </Container>
          </PageContainer>
        );
      }
}

const PageContainer = styled.View`
  background-color: black;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  padding-vertical: 20;
  width: 200
`;

const Container = styled.View`
  flex-grow: 1;
  align-self: stretch;
  justify-content: center;
  flex-direction: row;
`;

const Value = styled.Text`
  height: 28
  color: ${ColorCustom.MAIN_COLOR_BLUE};
  position: absolute;
  right : 0;
  bottom: ${props => props.bottomOffset - 3};
  align-items: center;
  fontSize: 20;
`;

const BarContainer = styled.View`
  width: ${CIRCLE_DIAMETER};
  align-items: center;
  padding-vertical: ${CIRCLE_DIAMETER / 2};
  margin-horizontal: 20;
`;
const Bar = styled.View`
  width: 2;
  background-color: ${ColorCustom.MAIN_COLOR_BLUE_OPACITY};
  flex-grow: 1;
`;
const LineTop = styled.View`
  height: 2;
  width: 20;
  background-color: ${ColorCustom.MAIN_COLOR_BLUE_OPACITY};
  position: absolute;
  top:0;
  alignSelf: center;
`;
const LineBottom = styled.View`
  height: 2;
  width: 20;
  background-color: ${ColorCustom.MAIN_COLOR_BLUE_OPACITY};
  position: absolute;
  bottom:0;
  alignSelf: center;
`;


const Circle = styled.View`
  border-radius: ${CIRCLE_DIAMETER / 2};
  width: ${CIRCLE_DIAMETER};
  height: ${CIRCLE_DIAMETER};
  background-color: white;
  position: absolute;
  bottom: ${props => props.bottomOffset};
`;