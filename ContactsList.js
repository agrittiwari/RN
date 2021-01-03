import React from 'react'
import {SectionList, Text } from 'react-native'
import PropTypes from 'prop-types';
import Row from './row'

const renderItem = (obj) => <Row {...obj.item} />

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

 const ContactsList = (props) => {
  
    return (
        <SectionList 
             renderItem = {renderItem}
             renderSectionHeader = {renderSectionHeader}
             sections ={[{
               title: 'A',
               data: props.contacts,
             }]}         
              />
    )
}

ContactsList.propTypes ={
    renderItem: PropTypes.func.isRequired,
    renderSectionHeader: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
}

export default ContactsList
