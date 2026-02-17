import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { styles as globalStyles } from '../styles/styles';

type DropdownItem = { name: string; route: string };
type Props = { label: string; items: DropdownItem[] };

export default function DropdownButton({ label, items }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const TASKBAR_HEIGHT = 60; // adjust to your taskbar
  const screenWidth = Dimensions.get('window').width;

  return (
    <>
      {/* Main Button (unchanged) */}
      <TouchableOpacity
        style={globalStyles.taskButton} 
        onPress={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        <Text style={globalStyles.taskButtonText}>
          {label} {open ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>

      {/* Absolute dropdown (separate from taskbar container) */}
      {open && (
        <TouchableWithoutFeedback onPress={() => setOpen(false)}>
          <View style={dropdownStyles.overlay}>
            <View
              style={[
                dropdownStyles.dropdownMenu,
                { top: TASKBAR_HEIGHT, width: screenWidth },
              ]}
            >
              {items.map((item) => (
                <TouchableOpacity
                  key={item.name}
                  style={dropdownStyles.dropdownItem}
                  onPress={() => {
                    setOpen(false);
                    router.push(item.route);
                  }}
                >
                  <Text style={dropdownStyles.dropdownText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
}

const dropdownStyles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999, // ensures it's above everything
  },
  dropdownMenu: {
    position: 'absolute',
    left: -100, // slight left offset to align with button
    right: 0, // stretches fully left→right
    backgroundColor: 'white',
    paddingVertical: 10,
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownText: { color: '#222', fontWeight: '500' },
});
