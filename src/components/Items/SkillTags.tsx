import { HStack, Tag } from "@chakra-ui/react"

interface Props {
  skills: string[]
}

export const SkillTags = ({ skills }: Props) => {
  return (
    <HStack spacing='2' >
      {skills.map((skill) => (
        <Tag size='sm' key={skill} variant='solid' colorScheme='teal'>
          {skill}
        </Tag>
      ))}
    </HStack>
  )
}
