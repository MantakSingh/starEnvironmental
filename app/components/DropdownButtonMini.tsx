import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
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

export default function DropdownButtonMini({ buttons }: Props) {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <View style={globalStyles.taskbar}>
      {buttons.map((btn) => {
        const isActive = activeDropdown === btn.id;

        return (
          <View
            key={btn.id}
            style={{ position: 'relative' }} // anchor container
          >
            <TouchableOpacity
              style={globalStyles.taskButton}
              onPress={() =>
                setActiveDropdown(isActive ? null : btn.id)
              }
            >
              <Text style={globalStyles.taskButtonText}>
                {btn.label} {isActive ? '▲' : '▼'}
              </Text>
            </TouchableOpacity>

            {isActive && (
              <View
                style={[
                  globalStyles.dropdownMenu,
                  {
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    minWidth: '100%',
                  },
                ]}
              >
                <ScrollView>
                  {btn.items.map((item) => (
                    <TouchableOpacity
                      key={item.name}
                      style={globalStyles.dropdownItem}
                      onPress={() => {
                        setActiveDropdown(null);
                        router.push(item.route);
                      }}
                    >
                      <Text style={globalStyles.dropdownText}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}
