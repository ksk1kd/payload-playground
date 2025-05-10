import React from 'react'
import type { TextAndMediaBlock as TextAndMediaBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'


export const TextAndMediaBlock: React.FC<TextAndMediaBlockProps> = (props) => {
  const {
    text,
    media,
    mediaPostion
  } = props

  const mediaComponent = media && <Media resource={media} />
  const textComponent = text && <RichText data={text} enableGutter={false} className="w-full" />

  return (
    <div className="container grid grid-cols-2 gap-20">
      {mediaPostion === 'left' ? (
        <>
          {mediaComponent}
          {textComponent}
        </>
      ) : (
        <>
          {textComponent}
          {mediaComponent}
        </>
      )}
    </div>
  )
}
