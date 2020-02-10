export const counterVote = (name:string,vote:number) => {
  return {
    type: name,
    vote: vote
  }
}