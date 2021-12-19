type Props = (message: string) => React.ReactNode;
const TextError = ({children}:any) => {
    return (
        <div>
            <h1>{children}</h1>
        </div>
    )
}

export default TextError
