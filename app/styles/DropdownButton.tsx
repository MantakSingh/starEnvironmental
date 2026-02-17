import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { styles } from '../styles/styles';

type DropdownItem = {
  name: string;
  route: string;
};

type Props = {
  label: string;
  items: DropdownItem[];
};

export default function DropdownButton({ label, items }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <TouchableWithoutFeedback onPress={() => setOpen(false)}>
      <View style={{ position: 'relative' }}>
        {/* Main Button */}
        <TouchableOpacity
          style={styles.taskButton}
          onPress={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <Text style={styles.taskButtonText}>
            {label} {open ? '▲' : '▼'}
          </Text>
        </TouchableOpacity>

        {/* Dropdown */}
        {open && (
          <View style={styles.dropdownMenu}>
            {items.map((item) => (
              <TouchableOpacity
                key={item.name}
                style={styles.dropdownItem}
                onPress={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                  router.push(item.route);
                }}
              >
                <Text style={styles.dropdownText}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
