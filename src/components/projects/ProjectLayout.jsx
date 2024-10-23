import Link from 'next/link'
import React from 'react'

const ProjectLayout = ({name, description, date, demoLink}) => {
  return (
    <Link 
    href={demoLink}
    target={'_blank'}
    className='flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg hover:border-accent'>

    <div className='flex items-center justify-center space-x-2'>
        <h2 className='text-foreground'>{name}</h2>
        <p className='text-muted'>{description}</p>
    </div>

    <p className='text-foreground'>
        {new Date(date).toDateString()}
    </p>

    </Link>
  )
}

export default ProjectLayout