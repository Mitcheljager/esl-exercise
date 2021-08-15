import { GetApi } from "./lib/Api"
import { formattedTime } from "./lib/dates"
import { Contestant, Participant } from "./lib/types"

import "./scss/Item.scss"

export default function Header(props: any) {
  const participantIdToName = (contestants: Contestant[], id: number) => {
    const contestant = contestants.filter((p: Contestant) => p.id === id)[0]

    if (contestant) return contestant.name
    return "No name found"
  }

  const isWinner = (participants: Participant[], participant: Participant): boolean => {
    const opponent = participants.filter(p => p.id !== participant.id)[0]

    if (participant.points && opponent.points) return participant.points[0] > opponent.points[0]
    return false
  }

  const { data, loading, error } = GetApi("/contestants")
  
  if (loading) return <div className="loading"></div>
  if (error) return <div>Error: { error }</div>
  
  if (data) return (
    <div className="item">
      <div className="item__date">{ formattedTime(props.data.beginAt) }</div>

      { props.data.participants.map((participant: Participant) => (
        <div className={ `participant ${ isWinner(props.data.participants, participant) ? "participant--winner" : "participant--loser" }` } key={ participant.id }>
          <div className="participant__name">{ participantIdToName(data, participant.id) }</div>

          <div className="participant__score">{ participant.points }</div>
        </div>
      )) }
    </div>
  )

  return ( <div></div> )
}
