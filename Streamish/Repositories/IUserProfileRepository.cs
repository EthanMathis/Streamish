using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void Delete(int id);
        List<UserProfile> GetAll();
        UserProfile GetUserProfileById(string firebaseId);
        UserProfile GetUserProfileByIdWithVideos(int id);
        void Update(UserProfile userProfile);
    }
}