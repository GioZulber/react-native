import React, {useState} from 'react';
import {StyleSheet, Switch, Platform} from 'react-native';

interface Props {
  isOn: boolean;
  onChange?: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };
  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#5856D6'}}
      thumbColor={
        Platform.OS === 'android' && isEnabled ? '#5858D6' : '#D9D9DB'
      }
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

// const styles = StyleSheet.create({});
