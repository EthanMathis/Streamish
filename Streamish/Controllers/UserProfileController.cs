using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Streamish.Models;
using Streamish.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Streamish.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_userProfileRepository.GetAll());
        }

        [HttpGet("GetUserProfileById")]
        public IActionResult GetUserProfileById(string id)
        {
            return Ok(_userProfileRepository.GetUserProfileById(id));
        }

        [HttpGet("GetUserProfileByIdWithVideos")]
        public IActionResult GetUserProfileByIdWithVideos(int id)
        {
            return Ok(_userProfileRepository.GetUserProfileByIdWithVideos(id));
        }


        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
            _userProfileRepository.Add(userProfile);
            return CreatedAtAction("Get", new { id = userProfile.Id }, userProfile);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile userProfile)
        {
            if (id != userProfile.Id)
            {
                return BadRequest();
            }

            _userProfileRepository.Update(userProfile);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userProfileRepository.Delete(id);
            return NoContent();
        }

        [HttpGet("DoesUserExist/{firebaseUserId}")]
        public IActionResult DoesUserExist(string firebaseUserId)
        {
            //var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var userProfile = _userProfileRepository.GetUserProfileById(firebaseUserId);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok();
        }

    }
}
