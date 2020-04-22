import React from 'react';
import { View, Slider, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { ColorCustom } from "../../utils/color";

export default function MarkedSlider(props) {
  const { min = 0, max = 1, maximumTrackTintColor = '#ddd', minimumTrackTintColor = ColorCustom.MAIN_COLOR_BLUE, thumbTintColor = '#fff' } = props
  const { marks, onAfterChange, chooseAnswerBySliderVerticail, ...resetProps } = props;

  const [value, setValue] = useState(0)
  const [width, setWidth] = useState(0)

  const renderMarks = () => {
    if (!marks || !marks.length) {
      return null;
    }
    const markWidth = width / marks.length;
    return (
      <View style={styles.marks}>
        {
          marks.map(mark => renderMark(mark, markWidth))
        }
      </View>
    );
  }

  const renderLineVertical = () => {
    if (!marks || !marks.length) {
      return null;
    }
    const markWidth = width / marks.length;
    return (
      <View style={styles.marks}>
        {
          marks.map(mark => renderLine(mark, markWidth))
        }
      </View>
    );
  }

  const renderLine = (mark, markWidth) => {
    markWidth = (width / max) * (mark.name.length)
    const markStyle = [
      styles.mark,
      {
        height: 25,
        width: 20,
        transform: [{ translateX: (-markWidth / 2) }],
        color: value === mark.value ? minimumTrackTintColor : maximumTrackTintColor,
        backgroudColor: 'red'
      },
      getMarkPosition(mark.value, markWidth),
    ];
    return (
      <View style={markStyle} key={mark.value} />
    );
  };
  const renderMark = (mark, markWidth) => {
    markWidth = (width / max) * (mark.name.length)
    const markStyle = [
      styles.mark,
      {
        width: markWidth + 10,
        transform: [{ translateX: (-markWidth / 2) }],
        color: value === mark.value ? minimumTrackTintColor : maximumTrackTintColor,
        fontSize: 12,
      },
      getMarkPosition(mark.value, markWidth),
    ];
    return (
      <Text style={markStyle} key={mark.value}>{mark.name}</Text>
    );
  };

  const getMarkPosition = (value) => {
    if (value === min) {
      return {
        left: 5,
      };
    }
    if (value === max) {
      return {
        left: width - 5,
      };
    }
    return {
      left: width * (value - min) / (max - min),
    };
  };

  const onLayout = ({ nativeEvent: e }) => {
    setWidth(e.layout.width)
  };

  const onChange = (value) => {
    const { onChange } = props;
    setValue(value)
    convertIndexToSelected(value)
    onChange && onChange(value);
  };

  useEffect(() => {
    let index = 0;
    const leng = marks.length;
    for (let i = 0; i < leng; ++i) {
      if (marks[i].isTrue) {
        index = i;
        break;
      }
    }
    if (index != 0) {
      setValue(index * 15);
    }
  }, []);

  const convertIndexToSelected = (value) => {
    const indexAnswer = value / 15
    if (indexAnswer != parseInt(indexAnswer, 10)) {
      return
    }
    const markSelected = marks.find(mark => mark.index == indexAnswer)
    if (markSelected) {
      chooseAnswerBySliderVerticail(markSelected)
    }
  }

  return (
    <View
      onLayout={onLayout}
      style={[styles.container, marks && marks.length ? styles.withMarks : null]}>
      <Slider
        value={value}
        minimumValue={min}
        maximumValue={max}
        onValueChange={onChange}
        onSlidingComplete={onAfterChange}
        maximumTrackTintColor={ColorCustom.MAIN_COLOR_BLUE}
        thumbTintColor={ColorCustom.MAIN_COLOR_BLUE}
        {...resetProps}
      />
      {renderMarks()}
      {/* {renderLineVertical()} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginHorizontal: 25,
  },
  withMarks: {
    marginBottom: 44,
  },
  marks: {
    position: 'absolute',
    left: 0,
    top: 44,
    right: 0,
    flexDirection: 'row',
  },
  mark: {
    position: 'absolute',
    fontSize: 14,
    textAlign: 'center',
  },
});