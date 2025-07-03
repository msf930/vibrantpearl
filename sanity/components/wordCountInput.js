import React from 'react'
import {FormField, set} from 'sanity'

export default function WordCountInput(props) {
    const {value, onChange, schemaType, elementProps} = props
    const wordCount = value ? value.trim().split(/\s+/).length : 0
    const maxWords = 20

    return (
        <FormField
            title={`${wordCount} / ${maxWords} words. Excerpts longer than 20 words will be shortened.`}
            // description={`${wordCount} / ${maxWords} words`}
            __unstable_markers={props.markers}
            __unstable_presence={props.presence}
            compareValue={props.compareValue}
        >
      <textarea
          {...elementProps}
          value={value || ''}
          onChange={e => onChange(set(e.target.value))}
          style={{
              height: '100%',
              width: '100%',
              resize: 'none',
              background: 'transparent',
              border: '1px solid #e0e0e0',
              borderRadius: '0.1875rem',
              padding: '0.5rem',
              color: 'black'
          }}
          rows={4}
      />
        </FormField>
    )
}