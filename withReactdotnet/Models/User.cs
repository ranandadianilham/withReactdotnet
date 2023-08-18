using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace withReactdotnet.Models;

public partial class User
{
    public int Id { get; set; }

    
    public string Username { get; set; } = null!;

    [Required(ErrorMessage = "User Name is required")]
    public string Email { get; set; } = null!;
    
    [Required(ErrorMessage = "Password is required")]
    public string Password { get; set; } = null!;
}
