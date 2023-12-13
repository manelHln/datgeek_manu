import { type SchemaTypeDefinition } from 'sanity'
import about from './schemas/about'
import feedback from './schemas/feedback'
import project from './schemas/project'
import skill from './schemas/skill'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, skill, project, feedback],
}
