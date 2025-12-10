

const ProfileCardTailwind = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center">
        <img
          src="https://randomuser.me/api/portraits/men/42.jpg"
          alt="User"
          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />
        <p className="text-gray-600 italic mb-4">
          "Tailwind CSS made designing so simple! I could create responsive layouts without writing a single CSS file."
        </p>
        <h3 className="font-semibold text-lg">— Ankit Sharma</h3>
        <span className="text-sm text-gray-500">Frontend Developer</span>
      </div>
    </div>
  );
};

export default ProfileCardTailwind;
