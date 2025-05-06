import {
  lexicalEditor,
  HeadingFeature,
  ParagraphFeature,
  BoldFeature,
  UnderlineFeature,
  UnorderedListFeature,
  OrderedListFeature,
  HorizontalRuleFeature,
  FixedToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const defaultLexical = lexicalEditor({
  features: [
    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5'] }),
    ParagraphFeature(),
    BoldFeature(),
    UnderlineFeature(),
    UnorderedListFeature(),
    OrderedListFeature(),
    HorizontalRuleFeature(),
    FixedToolbarFeature(),
  ],
})
