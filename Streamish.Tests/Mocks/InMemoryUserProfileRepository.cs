using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Streamish.Models;
using Streamish.Repositories;


namespace Streamish.Tests.Mocks
{
    class InMemoryUserProfileRepository : IUserProfileRepository
    {
        private readonly List<UserProfile> _data;

        public List<UserProfile> InternalData
        {
            get
            {
                return _data;
            }
        }

        public InMemoryUserProfileRepository(List<UserProfile> startingData)
        {
            _data = startingData;
        }


        public void Add(UserProfile userProfile)
        {
            var lastVideo = _data.Last();
            userProfile.Id = lastVideo.Id + 1;
            _data.Add(userProfile);
        }

        public void Delete(int id)
        {
            var profileToDelete = _data.FirstOrDefault(p => p.Id == id);
            if (profileToDelete == null)
            {
                return;
            }

            _data.Remove(profileToDelete);
        }

        public List<UserProfile> GetAll()
        {
            return _data;
        }

        public UserProfile GetUserProfileById(int id)
        {
            return _data.FirstOrDefault(p => p.Id == id);
        }

        public UserProfile GetUserProfileByIdWithVideos(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(UserProfile userProfile)
        {
            var currentProfile = _data.FirstOrDefault(p => p.Id == userProfile.Id);
            if (currentProfile == null)
            {
                return;
            }

            currentProfile.Name = userProfile.Name;
            currentProfile.Email = userProfile.Email;
            currentProfile.ImageUrl = userProfile.ImageUrl;
            currentProfile.DateCreated = userProfile.DateCreated;
        }
    }
}
