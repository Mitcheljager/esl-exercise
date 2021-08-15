import { GetApi } from "./lib/Api"
import { formattedTime } from "./lib/dates"
import { Contestant, Participant } from "./lib/types"

import "./scss/Item.scss"

export default function Header(props: any) {
  const participantIdToName = (contestants: Contestant[], id: number) => {
    return contestants.filter((p: Contestant) => p.id == id)[0].name
  }

  const { data, loading, error } = GetApi("/contestants")
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: { error }</div>
  
  if (data) return (
    <div className="item">
      <div className="item__date">{ formattedTime(props.data.beginAt) }</div>

      { props.data.participants.map((participant: Participant) => (
        <div className="participant" key={ participant.id }>
          <div className="participant__name">{ participantIdToName(data, participant.id) }</div>

          <div className="participant__score">{ participant.points }</div>
        </div>
      )) }
    </div>
  )

  return ( <div></div> )
}
