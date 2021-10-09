import React, { Component } from 'react';
import { ImageBackground, Text, View } from 'react-native'
import { BeforeLoginHeader, LoadingSpinner, FloatingButton, TagsCard } from '../Components';
import { connect } from 'react-redux';
import { bg } from '../Assets';
import dynamicStyles from './Styles/YourInterestStyles';

const tagArr = ['Topic', 'Topic', 'Long Topic', 'Long Topic', 'Topic', 'Long Topic']
const tagArr2 = ['Topic', 'Topic', 'Long Topic']
const tagArr3 = ['Topic', 'Topic', 'Long Topic', 'Long Topic', 'Topic', 'Long Topic']

class YourInterest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTag: [0],
            selectedTag2: [0],
            selectedTag3: [0]
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onSignUp = async () => {

    }

    componentDidUpdate(prevProps) {

    }

    render() {
        const { selectedTag, selectedTag2, selectedTag3 } = this.state;
        const { isDark, navigation } = this.props;
        const styles = dynamicStyles(isDark)
        return (
            <ImageBackground source={bg} style={styles.background} >
                <BeforeLoginHeader title={'What are you\ninterest in?'} />
                <View style={styles.container}>
                    <Text style={styles.descText}>{"Select some Topics you're interested in to help personalise your Waivlength experience, starting with finding people to follow."}</Text>
                    <TagsCard title={'You might like'} tags={tagArr} selectedIndex={selectedTag} onSelect={(index) => {
                        let { selectedTag } = this.state;
                        if (selectedTag.includes(index)) {
                            selectedTag = selectedTag.filter((v, i) => index != v)
                        } else {
                            selectedTag.push(index)
                        }
                        this.setState({ selectedTag })
                    }} />
                    <TagsCard title={'Genre'} tags={tagArr2} selectedIndex={selectedTag2} onSelect={(index) => {
                        let { selectedTag2 } = this.state;
                        if (selectedTag2.includes(index)) {
                            selectedTag2 = selectedTag2.filter((v, i) => index != v)
                        } else {
                            selectedTag2.push(index)
                        }
                        this.setState({ selectedTag2 })
                    }} />
                    <TagsCard title={'Genre'} tags={tagArr3} selectedIndex={selectedTag3} onSelect={(index) => {
                        let { selectedTag3 } = this.state;
                        if (selectedTag3.includes(index)) {
                            selectedTag3 = selectedTag3.filter((v, i) => index != v)
                        } else {
                            selectedTag3.push(index)
                        }
                        this.setState({ selectedTag3 })
                    }} />
                    <FloatingButton hasSkip onPress={() => { }} />
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => ({
    isDark: state.app.colorScheme == 'dark',
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(YourInterest)