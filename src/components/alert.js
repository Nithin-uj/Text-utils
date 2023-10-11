export default function alert(props) {
    // const cap = (word) => {
    //         const low = word.toLowerCase();
    //         return low.charAt[0].toUpperCase() + low.slice(1);
    // }
    return (
        props.alert && 
        <div class={`alert alert-${props.alert.typ} alert-dismissible fade show m-0`} role="alert">
        <strong>Alert ! </strong> {props.alert.msg} </div>
    );
}