

export function RegisterOrSignIn() {
    return (

        <div className="flex flex-row gap-0">
            <button className="px-1 py-1  hover:shadow-customhovereffect">
                <span className="text-gray-600 text-sm">Register</span>
            </button>
            <div className="px-1 py-1">
                <span className="text-gray-600 text-sm"> or </span>
            </div>
            <button className="px-1 py-1 hover:shadow-customhovereffect">
                <span className="text-gray-600 text-sm">Sign in</span>
            </button>
        </div>

    )
}

