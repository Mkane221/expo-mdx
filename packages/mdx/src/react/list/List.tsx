import { View } from 'react-native';

const List = ({ items }) => {
    return (
        <View>
            {items.map((item, index) => (
                <View key={index} style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
                    <Text>{item}</Text>
                </View>
            ))}
        </View>
    );
};

export default List;