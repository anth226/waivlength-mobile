import React from 'react';
import { View, Text, Pressable } from 'react-native';
import dynamicStyles from './Styles/TagsCardStyles';

const TagsCard = ({ isDark, title, tags, selectedIndex, onSelect }) => {
    const styles = dynamicStyles(isDark)
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    tags.map((v, i) => {
                        const isSelected = selectedIndex?.includes(i)
                        return (
                            <Pressable key={'tags' + i} onPress={() => onSelect(i)} style={[isSelected ? styles.tagContainer : styles.unselectedTagContainer]}>
                                <Text style={[isSelected ? styles.tagText : styles.unselectedTagText]}>{v}</Text>
                            </Pressable>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default TagsCard;