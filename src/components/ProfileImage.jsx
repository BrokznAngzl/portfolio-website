function ProfileImage() {
    return (
        <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-all duration-300" />

                {/* Profile Image */}
                <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-2xl overflow-hidden border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800">
                    <img
                        src="https://avatars.githubusercontent.com/u/124576166?v=4"
                        alt="Kuldeep Prajapati"
                        className="w-full h-full object-cover"
                    />

                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-5 -right-5 bg-dark border border-gray-800 px-4 py-2 rounded-lg shadow-lg">
          <span className="text-sm font-medium">
            🚀 Open for Work
          </span>
                </div>
            </div>
        </div>
    );
}

export default ProfileImage;