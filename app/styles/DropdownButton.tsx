import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { styles as globalStyles } from '../styles/styles';

type DropdownItem = { name: string; route: string };
type Props = {
  buttons: {
    label: string;
    items: DropdownItem[];
    id: string;
  }[];
};

const TASKBAR_HEIGHT = 60;
const DROPDOWN_HEIGHT = 180;

export default function DropdownButton({ buttons }: Props) {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <View>
      {/* Main Taskbar Buttons */}
      <View style={styles.taskbar}>
        {buttons.map((btn) => (
          <TouchableOpacity
            key={btn.id}
            style={globalStyles.taskButton}
            onPress={() =>
              setActiveDropdown(activeDropdown === btn.id ? null : btn.id)
            }
          >
            <Text style={globalStyles.taskButtonText}>
              {btn.label} {activeDropdown === btn.id ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Universal Dropdown Menu */}
      {activeDropdown && (
        <TouchableWithoutFeedback onPress={() => setActiveDropdown(null)}>
          <View style={styles.overlay}>
            <View
              style={[
                styles.dropdownMenu,
                { top: TASKBAR_HEIGHT, height: DROPDOWN_HEIGHT },
              ]}
            >
              <ScrollView>
                {buttons
                  .find((b) => b.id === activeDropdown)!
                  .items.map((item) => (
                    <TouchableOpacity
                      key={item.name}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setActiveDropdown(null);
                        router.push(item.route);
                      }}
                    >
                      <Text style={styles.dropdownText}>{item.name}</Text>
                    </TouchableOpacity>
                  ))}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  taskbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingHorizontal: 16,
    height: TASKBAR_HEIGHT,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // covers full screen
    zIndex: 100,
  },
  dropdownMenu: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    elevation: 10,
    shadowColor: '#000',
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
  dropdownText: {
    color: '#222',
    fontWeight: '500',
  },
});
