import { type } from "os";

type ListProps<T> = {
    data: T[];
    handleClick: (value: T) => void;
}

type VehicleType = {
    name: string;
    speed: number;
}

type Airplane = VehicleType & {
    maxHeight: number;
    displacement?: never
}

type Ship = VehicleType & {
    displacement: number;
    maxHeight?: never
}

type Vehicle = Airplane | Ship;

export const ListComponent1 = <T extends string>(props: ListProps<T>) => {
    return (
        <div>
            <h2>List components</h2>
            <ul>
                {props.data.map((item, index) => (
                    <li key={index} onClick={() => props.handleClick(item)}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default function ListComponent<T extends string|number>(props: ListProps<T>) {
    return (
        <div>
            <h2>List components</h2>
            <ul>
                {props.data.map((item, index) => (
                    <li key={index} onClick={() => props.handleClick(item)}>{item}</li>
                ))}
            </ul>
        </div>
    )
}


export function PropsLimit(props: Vehicle) {
    return <div>
        <p>name: {props.name}</p>
        <p>speed: {props.speed}</p>
        {
            props.maxHeight ? (<p>maxHeight: {props.maxHeight}</p>) : (<p>null</p>)
        }
        {
            props.displacement ? (<p>displacement: {props.displacement}</p>) : ('')
        }
    </div>;
}