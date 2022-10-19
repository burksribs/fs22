import React from 'react'

const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ parts }) => {
  const sum = parts.reduce((s, p) =>
    s + p.exercises, 0,
  );
  { console.log(sum) }
  return (
    <p><strong>total of {sum} exercises</strong></p>
  )
}

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map(part =>
      <div key={part.id}>
        <Part part={part} />
      </div>)}
  </>

const CourseInfo = ({ course }) =>
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
const Course = ({ courses }) =>
  <>
    {courses.map(course =>
      <div key={course.id}>
        <CourseInfo course={course} />
      </div>)
    }
  </>

export default Course