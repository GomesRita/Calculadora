import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";
import { useState } from 'react';

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('0');
    } else {
      setExpression(prev => prev + value);
    }
  };

  return (
    <GluestackUIProvider mode="light">
      <SafeAreaView style={styles.container}>
      <Box style={styles.tela}>
          <Box>
            <Text className="text-typography-0 text-right text-lg">{expression}</Text>
          </Box>
          <Box>
            <Text className="text-typography-0 text-right text-3xl font-bold">{result}</Text>
          </Box>
        </Box>
        <Box style={styles.box}>
          <VStack space="md">
            <HStack space="md" reversed={false}>
              <Pressable onPress={() => handleButtonPress('7')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">7</Text>
              </Pressable>
              <Pressable onPress={() => handleButtonPress('8')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">8</Text>
              </Pressable>
              <Pressable onPress={() => handleButtonPress('9')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">9</Text>
              </Pressable>
              <Pressable onPress={() => handleButtonPress('/')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">/</Text>
              </Pressable>
            </HStack>
            <HStack space="md" reversed={false}>
              <Pressable onPress={() => handleButtonPress('4')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">4</Text>
              </Pressable>
              <Pressable onPress={() => handleButtonPress('5')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">5</Text>
              </Pressable>
              <Pressable onPress={() => handleButtonPress('6')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">6</Text>
              </Pressable>
              <Pressable onPress={() => handleButtonPress('*')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">*</Text>
              </Pressable>
            </HStack>
            <HStack space="md" reversed={false}>
              <Pressable onPress={() => handleButtonPress('1')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">1</Text>
              </Pressable>
              <Pressable onPress={() => handleButtonPress('2')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">2</Text>
              </Pressable>
              <Pressable onPress={() => handleButtonPress('3')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">3</Text>
              </Pressable>
              <Pressable onPress={() => handleButtonPress('-')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">-</Text>
              </Pressable>
            </HStack>
            <HStack space="md" reversed={false}>
              <Pressable onPress={() => handleButtonPress('C')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">C</Text>
              </Pressable>
              <Pressable onPress={() => handleButtonPress('0')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">0</Text>
              </Pressable>
              <Pressable onPress={() => handleButtonPress('=')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">=</Text>
              </Pressable>
              <Pressable onPress={() => handleButtonPress('+')} className="p-3 bg-primary-50 rounded-lg flex-1 items-center justify-center">
                <Text className="text-typography-0">+</Text>
              </Pressable>
            </HStack>
          </VStack>
        </Box>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  box: {
    width: "100%",
    backgroundColor: '#2a2a2a',
    padding: 10,
    borderRadius: 10,
  },
  tela: {
    width: "100%",
    backgroundColor: '#1a1a1a',
    height: "20%",
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
});