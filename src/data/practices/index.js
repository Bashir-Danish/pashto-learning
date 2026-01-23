// Practice data for quizzes
import { basicPractices } from './basic-practices';

export const practices = [
  ...basicPractices,
  // Additional practices will be added here
];

export function getPracticeById(id) {
  return practices.find(p => p.id === id);
}

export default practices;
