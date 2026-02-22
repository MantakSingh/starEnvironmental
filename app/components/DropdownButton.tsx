import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ScrollView,
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
      <View style={globalStyles.taskbar}>
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
          <View style={globalStyles.dropdownOverlay}>
            <View
              style={[
                globalStyles.dropdownMenu,
                { top: TASKBAR_HEIGHT, height: DROPDOWN_HEIGHT },
              ]}
            >
              <ScrollView>
                {buttons
                  .find((b) => b.id === activeDropdown)!
                  .items.map((item) => (
                    <TouchableOpacity
                      key={item.name}
                      style={globalStyles.dropdownItem}
                      onPress={() => {
                        setActiveDropdown(null);
                        router.push(item.route);
                      }}
                    >
                      <Text style={globalStyles.dropdownText}>{item.name}</Text>
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
