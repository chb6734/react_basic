export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case "added": {
      const { mentoNm, mentoTitle } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: mentoNm, title: mentoTitle }],
      };
    }
    case "deleted": {
      const { prev } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== prev),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입`);
    }
  }
}
