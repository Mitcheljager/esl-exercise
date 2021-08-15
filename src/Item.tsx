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
    <div>
      <div>{ formattedTime(props.data.beginAt) }</div>

      <div>
        { props.data.participants.map((participant: Participant) => (
          <div key={ participant.id }>
            { participantIdToName(data, participant.id) }
            { participant.points }
          </div>
        )) }
      </div>
    </div>
  )

  return ( <div></div> )
}
