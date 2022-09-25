import { GreetProps } from "./greet.types"
export const Greet = (props: GreetProps) => {
    const test = () => {
        return 0
    }
    return (

        <div>
            Hello {props.name ? props.name : "Guest"}
            <h1>world</h1>
        </div>

    )
}
