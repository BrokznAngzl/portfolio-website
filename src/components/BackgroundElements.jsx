function BackgroundElements() {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-primary/10 blur-xl animate-float"/>

            <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-secondary/10 blur-xl animate-float"/>

            <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-accent/10 blur-lg animate-float"/>
        </div>
    );
}

export default BackgroundElements;