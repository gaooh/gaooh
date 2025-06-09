const Profile = () => {
  return (
    <section id="profile" className="max-w-4xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Profile</h2>
      <img
        className="w-32 h-32 rounded-full mx-auto mb-4"
        src="https://via.placeholder.com/150"
        alt="Profile"
      />
      <p>
        Short bio goes here. I'm a software developer specializing in web
        technologies.
      </p>
    </section>
  );
};

export default Profile;
