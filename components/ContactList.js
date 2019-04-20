import React from 'React'
import {Text, SectionList, TouchableOpacity} from 'react-native'

function ContactRow(props) {
  const colors = ['yellow', 'whitesmoke', 'palegoldenrod']
  return (
    <TouchableOpacity
      style={{paddingStart: 25, paddingBottom: 5, backgroundColor: 'white'}}
      onPress={() => {props.onSelectContact(props)}}
    >
      <Text> {props.name} </Text>
    </TouchableOpacity>
  )
}

function ContactList(props) {
  const contactsByElement = props.contacts.reduce(
    (res, cont) => {
    const element = cont.element
      return {
          ...res,
          [element]: [...(res[element] || []), cont],
      }
    }, {})

  const sections = Object.keys(contactsByElement).sort().map(
    element => ({
      title: element,
      data: contactsByElement[element]
    })
  )

  let renderItem = ({item}) =>
  <ContactRow
      onSelectContact={props.onSelectContact}
      id={item.key}
      {...item}
  />
  let renderSectionHeader =({section}) => <Text> {section.title} </Text>

  return (
     <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      >
      </SectionList>
  )
}

export default ContactList