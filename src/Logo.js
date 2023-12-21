function Logo(props) {
    return (
        <div>
            <img 
                src={props.img}
                width={props.width}
                height={props.height} 
            />
        </div>
    )
}

export default Logo;